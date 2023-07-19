import { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { StyledLandingPage } from "./LandingPage.styles";
import { getAllCapsules } from "../../Services/Spacex";
import { CapsuleCard } from "../../Components/CapsuleCard/CapsuleCard";

const LandingPage = () => {
  const [allCapsules, setAllCapsules] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    type: "",
    original_launch: "",
  });
  const [pagination, setPagination] = useState({
    limit: 4,
    offset: 0,
  });
  useEffect(() => {
    getAllCapsules(setAllCapsules, filters, pagination);
  }, [pagination]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const updatedFilters = {
      ...filters,
      original_launch: filters?.original_launch?.toISOString(),
    };
    getAllCapsules(setAllCapsules, filters, pagination);
  };
  return (
    <StyledLandingPage>
      <div className="main-header">
        <Navbar />
        <div className="header-content">
          <span className="desc">UPCOMING LAUNCH</span>
          <h2 className="title">STARLINK MISSION</h2>
          <button className="watch-btn">WATCH</button>
        </div>
      </div>
      <div className="capsules-section">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <p className="form-title">Search Form</p>
          <div className="form-layout">
            <div className="form-field">
              <label className="form-label">Status:</label>
              <select
                onChange={(e) => {
                  setFilters((prev) => {
                    return {
                      ...prev,
                      status: e?.target?.value,
                    };
                  });
                }}
                value={filters?.status}
              >
                {" "}
                <option value="">All</option>{" "}
                <option value="active">Active</option>{" "}
                <option value="retired">Retired</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Type:</label>
              <input
                onChange={(e) => {
                  setFilters((prev) => {
                    return {
                      ...prev,
                      type: e?.target?.value,
                    };
                  });
                }}
                value={filters?.type}
                type="text"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Launch Date:</label>
              <input
                type="date"
                onChange={(e) => {
                  const date = new Date(e?.target?.value);
                  setFilters((prev) => {
                    return {
                      ...prev,
                      original_launch: date,
                    };
                  });
                }}
              />
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </form>
        <div className="capsules-grid">
          {allCapsules?.length > 0 ? (
            allCapsules?.map((item, i) => {
              return <CapsuleCard item={item} key={i} />;
            })
          ) : (
            <p>No Results Found</p>
          )}
        </div>
      </div>
      <div className="pagination">
        {Array.from({ length: 4 })?.map((_, i) => {
          return (
            <div
              onClick={() => {
                setPagination((prev) => {
                  return {
                    ...prev,
                    offset: i * prev.limit,
                  };
                });
              }}
              className="pagination-btn"
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
