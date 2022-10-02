import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className="searchForm">

     <button className="filterButton" onClick = {() => setShowFilter(!showFilter)}>{!showFilter? "X" : "Filter"}</button>
      <form className = {!showFilter ? "filterform"  : "hidder move-right"}>
        <label>AERONAUTICS</label>
        <input
          className="cb"
          type="checkbox"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">Aeronautics</span>
        <input
          className="cb"
          type="checkbox"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">Aerodynamics</span>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">Aircraft Design</span>
        <input
          type="checkbox"
          value="aeronautics"
          className="cb"
          name="aeronautics"
        />
        <span className="cbtitle">Aircraft Propulsion</span>
        <input
          type="checkbox"
          value="aeronautics"
          className="cb"
          name="aeronautics"
        />
        <span className="cbtitle">Aircraft Stability</span>
        <input
          type="checkbox"
          value="aeronautics"
          className="cb"
          name="aeronautics"
        />
        <span className="cbtitle">Avionics</span>
        <label>CHEMISTRY AND MATERIALS</label>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">Composite Material</span>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">
          {" "}
          Inorganic, Organic and Physical Chemistry
        </span>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">Metals and Metallic Materials</span>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle"> Propellants</span>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle"> Space Processing</span>
        <label>ENGINEERING</label>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">     Communication and Radar</span>

    
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle"> Fluid Mechanics</span>

       
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">   Instrumentation</span>

      
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">Lasers and Masers</span>

        
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">Structural Mechanics</span>

        
        <label>PHYSICS</label>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">   Acoustics</span>

     
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle"> Atomic and Molecular</span>

        
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">    Nuclear Physics</span>

    
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">   Plasma</span>

        
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">    Solid State Physics</span>

      
        <label>SPACE SCIENCES</label>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">    Astronomy</span>

       
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">   Astrophysics</span>

        
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">  Lunar and Planetary Science</span>

       
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle"> Space Radiation</span>

        
        <label>SPACE SCIENCES</label>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle"> Astronomy</span>

        
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">  Astrophysics</span>

       
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">  Lunar and Planetary Science</span>

        
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">  Space Radiation</span>

        
        <label>GEOSCIENCES</label>
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">   Earth Resources</span>

       
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">  Earth Production</span>

       
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">  Environment Pollution</span>

        
        <input
          type="checkbox"
          className="cb"
          value="aeronautics"
          name="aeronautics"
        />
        <span className="cbtitle">  Geophysics</span>

        
      </form>
    </div>
  );
}

export default SearchForm;
