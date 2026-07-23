import Card from "./Components/Card";

const jobs = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    company: "Amazon",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    company: "Google",
    posted: "2 days ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    posted: "1 week ago",
    position: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    posted: "3 days ago",
    position: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    posted: "4 days ago",
    position: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    company: "Meta",
    posted: "6 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    company: "Adobe",
    posted: "2 weeks ago",
    position: "Product Designer",
    tag1: "Hybrid",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    company: "Uber",
    posted: "3 weeks ago",
    position: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    company: "Spotify",
    posted: "1 day ago",
    position: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    company: "Tesla",
    posted: "5 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Austin, USA"
  }
];

const App = () => {
  return (
    <div className="parent">
      {jobs.map((job, index) => (
        <Card key={index} data={job} />
      ))}
    </div>
  );
};

export default App;