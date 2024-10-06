import coll_1 from "../assets/images/coll_1.jpg";
import coll_2 from "../assets/images/coll_2.jpg";
import coll_3 from "../assets/images/coll_3.jpg";
import coll_4 from "../assets/images/coll_4.jpg";
import coll_5 from "../assets/images/coll_5.jpg";
import coll_6 from "../assets/images/coll_6.jpg";

const StudentsGallery = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <img className="rounded-lg shadow-xl shadow-slate-400" src={coll_2} alt="" />
      <img className="rounded-lg shadow-xl shadow-slate-400" src={coll_3} alt="" />
      <img className="rounded-lg shadow-xl shadow-slate-400" src={coll_1} alt="" />
      <img className="rounded-lg shadow-xl shadow-slate-400" src={coll_4} alt="" />
      <img className="rounded-lg shadow-xl shadow-slate-400" src={coll_5} alt="" />
      <img className="rounded-lg shadow-xl shadow-slate-400" src={coll_6} alt="" />
    </div>
  );
};

export default StudentsGallery;
