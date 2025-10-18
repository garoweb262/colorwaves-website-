"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { 
  Share2, 
  Copy, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageCircle, 
  Mail,
  Check
} from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
  hashtags?: string[];
}

export function SocialShare({ url, title, description, imageUrl, hashtags = [] }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');
  const encodedImageUrl = encodeURIComponent(imageUrl || '');
  const hashtagString = hashtags.map(tag => `#${tag}`).join(' ');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtags.join(',')}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = (platform: string) => {
    const shareUrl = shareLinks[platform as keyof typeof shareLinks];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={handleButtonClick}
        className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[9998]" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-[9999] min-w-[240px]">
            <div className="space-y-3">
              {/* Copy Link */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyLink}
                className="w-full justify-start text-gray-700 hover:bg-gray-100"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Link
                  </>
                )}
              </Button>

              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  className="w-full justify-start text-blue-600 hover:bg-blue-50"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="w-full justify-start text-blue-400 hover:bg-blue-50"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                  className="w-full justify-start text-blue-700 hover:bg-blue-50"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('whatsapp')}
                  className="w-full justify-start text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('email')}
                  className="w-full justify-start text-gray-600 hover:bg-gray-50 col-span-2"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
