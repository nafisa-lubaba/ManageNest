const DashboardSharedTitle = ({ heading, subHeading }) => {
    return (
      <div className="max-w-3xl mx-auto text-center my-8 sm:my-12 md:my-16 relative px-4">
        <div className="relative">
          <div className="relative inline-block mb-4">
            <div className="absolute -left-4 sm:-left-6 -right-4 sm:-right-6 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>
          <div className="relative inline-block">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 leading-tight">
              {heading}
            </h3>
            <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-0.5">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
          </div>
          <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-8">
            <div className="w-12 sm:w-16 h-1 bg-cyan-500 transform -rotate-45" />
            <div className="w-8 sm:w-12 h-1 bg-cyan-500/50 transform -rotate-45 mt-4" />
          </div>
          <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-8">
            <div className="w-12 sm:w-16 h-1 bg-cyan-500 transform rotate-45" />
            <div className="w-8 sm:w-12 h-1 bg-cyan-500/50 transform rotate-45 mt-4" />
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardSharedTitle;