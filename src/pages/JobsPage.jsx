import JobListings from "../components/JobListings"

function JobsPage({deleteJob}) {
  return (
    <>
      <JobListings deleteJob={deleteJob} isHome={false}/>
    </>
  )
}

export default JobsPage