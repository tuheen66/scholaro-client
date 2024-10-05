import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CollegeCard from "../../components/CollegeCard";

const Colleges = () => {
  const { data: colleges = [] } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/colleges");
      return res.data;
    },
  });

  return (
    <div>
    
      <div className="grid grid-cols-3 gap-12 mt-12">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
