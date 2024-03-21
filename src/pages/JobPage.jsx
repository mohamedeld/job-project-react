import JobDetail from "../components/JobDetail"


function JobPage({deleteJob}) {
  return (
    <>
      <JobDetail deleteJob={deleteJob}/>
    </>
  )
}

export default JobPage