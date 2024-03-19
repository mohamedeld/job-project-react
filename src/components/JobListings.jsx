import jobs from "../jobs.json";
import JobListing from "./JobListing";

function JobListings() {
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing 1 --> */}
            {jobs ? (
              jobs.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })
            ) : (
              <h1>There are no jobs yet</h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default JobListings;
