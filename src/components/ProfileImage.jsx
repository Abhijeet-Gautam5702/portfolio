const ProfileImage = () => {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background bg-card relative z-10 overflow-hidden ml-6 md:ml-12 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
      <img 
        src="https://github.com/Abhijeet-Gautam5702.png" 
        alt="Abhijeet Gautam"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
