"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, X, Image as ImageIcon } from "lucide-react";

interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in MB
  value?: File[];
  onChange?: (files: File[]) => void;
  className?: string;
  disabled?: boolean;
}

export function FileUpload({
  label = "Upload Files",
  accept = "image/*",
  multiple = true,
  maxFiles = 10,
  maxSize = 10, // 10MB default
  value = [],
  onChange,
  className = "",
  disabled = false,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const validFiles: File[] = [];
    const errors: string[] = [];

    // Check file count
    if (value.length + fileArray.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed`);
    }

    // Check each file
    fileArray.forEach((file) => {
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        errors.push(`${file.name} is larger than ${maxSize}MB`);
        return;
      }

      // Check file type
      if (accept && !file.type.match(accept.replace("*", ".*"))) {
        errors.push(`${file.name} is not a valid file type`);
        return;
      }

      validFiles.push(file);
    });

    if (errors.length > 0) {
      setError(errors.join(", "));
      setTimeout(() => setError(""), 5000);
    } else {
      setError("");
      onChange?.(multiple ? [...value, ...validFiles] : validFiles);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (disabled) return;
    
    handleFiles(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const newFiles = value.filter((_, i) => i !== index);
    onChange?.(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFilePreview = (file: File) => {
    if (file.type.startsWith("image/")) {
      return URL.createObjectURL(file);
    }
    return null;
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
          {!multiple && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Upload Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center transition-colors
          ${dragActive 
            ? "border-palette-gold-500 bg-palette-gold-500/10" 
            : "border-gray-300 dark:border-gray-600 hover:border-palette-gold-400"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
          disabled={disabled}
        />

        <motion.div
          className="flex flex-col items-center space-y-2"
          whileHover={!disabled ? { scale: 1.02 } : {}}
          transition={{ duration: 0.2 }}
        >
          <Upload className="w-8 h-8 text-gray-400" />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-palette-gold-500">Click to upload</span> or drag and drop
          </div>
          <div className="text-xs text-gray-500">
            {accept.includes("image") ? "Images" : "Files"} up to {maxSize}MB
            {multiple && ` (max ${maxFiles} files)`}
          </div>
        </motion.div>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded"
        >
          {error}
        </motion.div>
      )}

      {/* File Previews */}
      {value.length > 0 && (
        <div className="space-y-2">
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Uploaded Files ({value.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {value.map((file, index) => {
              const preview = getFilePreview(file);
              return (
                <motion.div
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden"
                >
                  {preview ? (
                    <div className="aspect-square">
                      <img
                        src={preview}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-600">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  
                  <div className="p-2">
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </div>
                  </div>

                  {!disabled && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
