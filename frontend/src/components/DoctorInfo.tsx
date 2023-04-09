import { ReactComponent as IconDoctor } from "@/assets/icons/IconDoctor.svg";

interface DoctorInfoProps {
  fullname: string;
  nickname: string;
  medCenter: string;
  location: string;
}

export const DoctorInfo: React.FC<DoctorInfoProps> = ({
  fullname,
  location,
  medCenter,
  nickname,
}) => {
  return (
    <div className="flex items-center gap-[14px]">
      <IconDoctor className="w-[60px] h-[60px]" />
      <div className="flex flex-col gap-[5px]">
        <div className="text-primaryBlue text-heading-2">
          <span className="inline-block">Dr. {fullname}</span>
          <span>{nickname}</span>
        </div>
        <span>General Practice & Supplements</span>
        <div className="font-bold text-primaryBlue">
          <span className="inline-block">{medCenter}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
