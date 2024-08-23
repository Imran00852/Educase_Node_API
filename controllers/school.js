import { connection } from "../data/database.js";
import { v4 as uuidv4 } from "uuid";
import { schoolSchema, validateQueryPrams } from "../utils/ValidateSchema.js";
import { getDistance } from "../utils/calculateDistance.js";

// add school
export const addSchool = (req, res) => {
  const { error } = schoolSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  const { name, address, longitude, latitude } = req.body;

  const q = `INSERT into schools(id,name,address,longitude,latitude) VALUES(?,?,?,?,?)`;

  const values = [uuidv4(), name, address, longitude, latitude];

  connection.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Failed to add school. Please try again later.",
      });
    }
    res.status(201).json({
      message: "School Added Successfully",
    });
  });
};

//get all schools
export const getSchools = (req, res) => {
  
  const { error } = validateQueryPrams.validate(req.query);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  const { latitude, longitude } = req.query;
  const distance = getDistance(latitude, longitude);
  const q = `SELECT *, ${distance} AS distance FROM schools ORDER BY distance`;
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(404).json({
        message: "School not found",
      });
    }
    res.status(201).json({
      schools: result,
    });
  });
};
