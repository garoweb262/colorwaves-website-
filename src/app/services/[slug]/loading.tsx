export default function Loading() {
  return (
    <div className="bg-[#4B369D] min-h-screen">
      <section className="relative w-full h-[60vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="h-10 bg-white/20 rounded w-7/12 mx-auto mb-4 animate-pulse" />
          <div className="h-5 bg-white/15 rounded w-9/12 mx-auto animate-pulse" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {[0,1].map((i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-pulse">
                  <div className="h-7 bg-white/15 rounded w-5/12 mb-4" />
                  <div className="space-y-3">
                    <div className="h-4 bg-white/10 rounded w-11/12" />
                    <div className="h-4 bg-white/10 rounded w-10/12" />
                    <div className="h-4 bg-white/10 rounded w-9/12" />
                  </div>
                </div>
              ))}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-pulse">
                <div className="h-7 bg-white/15 rounded w-4/12 mb-6" />
                <div className="grid md:grid-cols-2 gap-6">
                  {[0,1,2,3].map((i) => (
                    <div key={i} className="h-64 bg-white/10 rounded-xl" />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {[0,1].map((i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-pulse">
                  <div className="h-6 bg-white/15 rounded w-5/12 mb-6" />
                  <div className="space-y-3">
                    <div className="h-4 bg-white/10 rounded w-full" />
                    <div className="h-4 bg-white/10 rounded w-10/12" />
                    <div className="h-4 bg-white/10 rounded w-9/12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


