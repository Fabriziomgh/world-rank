import WorldRankLogo from './icons/WorldRankLogo';

const HeaderFondo = () => {
   return (
      <div
         className="[background-image:url(/hero-image-wr.jpg)]
      bg-cover bg-center bg-no-repeat h-[340px] absolute top-0 left-0 w-full
      flex items-center justify-center -z-10
      "
      >
         <WorldRankLogo />
      </div>
   );
};

export default HeaderFondo;
