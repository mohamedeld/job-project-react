import { useEffect, useState } from "react";

import JobListing from "./JobListing";
import Loading from "./Loading";

function JobListings({isHome=true}) {
  const [jobs,setJobs] = useState([]);
  const [loading,setLoading] = useState(true);
  
  async function getJobs(){
    const apiUrl = isHome ?'/api/jobs?_limit=3' :'/api/jobs' ;
    try{
      const response = await fetch(apiUrl);
      const data =await response.json();
      setJobs(data);
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    getJobs();
  },[])
  
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing 1 --> */}
            {loading === false && jobs ? (
              jobs.map((job) => {
                return <JobListing  key={job.id} job={job} />;
              })
            ) : (
              <Loading/>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default JobListings;
