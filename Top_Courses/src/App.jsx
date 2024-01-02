import { useEffect, useId, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/cards';
const filterData = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Development",
  },
  {
    id: 3,
    title: "Business",
  },
  {
    id: 4,
    title: "Design",
  },
  {
    id: 5,
    title: "Lifestyle",
  },
];


function App() {
  const [courses, setCourses] = useState("");
  const [category , setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
        console.log(output);
      } catch (error) {
        toast.error("something went wrong")
      }
    }
    fetchData();
  }, [])
  return (
    <>
      <div>
        <Navbar />
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <Cards  courses={courses} category={category} />
      </div>
    </>
  );
}

const apiUrl = 'https://codehelp-apis.vercel.app/api/get-top-courses';
export { filterData, apiUrl }
export default App;
