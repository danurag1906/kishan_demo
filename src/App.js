import "./App.css";
import { useState, useEffect } from "react";
import Papa from "papaparse";
// import Row from "./Row";
import { Routes, Route } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import AllPosts from "./AllPosts";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState([]);
  // const [loading, setLoading] = useState(true);


  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5T2XCFiJPcmZExA48S7rDOUn6lqyZk1-8J4nCeF-s61OF8NhZp_UI06idqMO-336MNB1r_rgOAaWQ/pub?gid=1816628659&single=true&output=csv",
      // "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5T2XCFiJPcmZExA48S7rDOUn6lqyZk1-8J4nCeF-s61OF8NhZp_UI06idqMO-336MNB1r_rgOAaWQ/pub?gid=0&single=true&output=csv",
      // "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2NN1ywl2b9EcKYj0mSpIoU-iPPvAUIxdDla2aiVXzjKW4uOVfl3YQMP1O23p8UlK3vidt0X45SCOV/pub?output=csv",
      // "https://docs.google.com/spreadsheets/d/e/2PACX-1vTDTAFEMQ9XdPaPaq-EOcpWBSDcp2NUgNGRvWTttLlNEzABETlicIf8BD1YqAvdjkIXnKvQhbrA0Jny/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          // setData(results.data);
          let dataWithId = results.data.map((data, index) => {
            return { ...data, id: index };
          });
          setData(dataWithId);
          // setFilterdata(results.data)
          // setData(dataWithId);
          // setFilterdata(dataWithId);
          // setLoading(false);
          // console.log(dataWithId);
        },
      }
    );
  }, []);

  console.log(data);
  console.log("before");

  useEffect(() => {
    const filteredData = data.filter(
      (row) =>
        row.description.toLowerCase().startsWith(search.toLowerCase()) ||
        row.size.toLowerCase().startsWith(search.toLowerCase()) ||
        row.code.toLowerCase().startsWith(search.toLowerCase())
    );
    // console.log("above");
    // console.log(filterdata);
    console.log(`filteredData-${filteredData}`);
    setFilterdata(filteredData);
  }, [search, data]);


  return (
    <div className="App">
      {/* {loading && <p>Loading please wait...</p>} */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
            {/* <img src="https://drive.google.com/uc?export=view&id=132T9XLWAGJluoS6v2U6if8YqyQZvKHpL" alt="" srcset="" /> */}
              <input
                id="input"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search === "" ? (
                <p>Please enter a search term</p>
              ) : (
                <AllPosts data={filterdata} search={search} />
              )}
            </>
          }
        />
        <Route exact path="/:id" element={<DetailsPage data={filterdata} />} />
      </Routes>
    </div>
  );
}

export default App;
