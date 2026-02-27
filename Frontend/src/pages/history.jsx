// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import HomeIcon from "@mui/icons-material/Home";
// import "../styles/history.css";

// import { IconButton } from "@mui/material";
// export default function History() {
//   const { getHistoryOfUser } = useContext(AuthContext);

//   const [meetings, setMeetings] = useState([]);

//   const routeTo = useNavigate();

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const history = await getHistoryOfUser();
//         setMeetings(history);
//       } catch {
//         // IMPLEMENT SNACKBAR
//       }
//     };

//     fetchHistory();
//   }, []);

//   let formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();

//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div>
//       <IconButton
//         onClick={() => {
//           routeTo("/home");
//         }}
//       >
//         <HomeIcon />
//       </IconButton>
//       {meetings.length !== 0 ? (
//         meetings.map((e, i) => {
//           return (
//             <>
//               <Card key={i} variant="outlined">
//                 <CardContent>
//                   <Typography
//                     sx={{ fontSize: 14 }}
//                     color="text.secondary"
//                     gutterBottom
//                   >
//                     Code: {e.meetingCode}
//                   </Typography>

//                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Date: {formatDate(e.date)}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";

import "../styles/history.css";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        console.log("Error fetching history");
      }
    };
    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="history-container">
      <IconButton className="home-btn" onClick={() => routeTo("/home")}>
        <HomeIcon />
      </IconButton>

      {meetings.length !== 0 ? (
        <div className="history-cards">
          {meetings.map((e, i) => (
            <Card key={i} className="history-card">
              <CardContent>
                <Typography className="history-title" gutterBottom>
                  Code: {e.meetingCode}
                </Typography>

                <Typography className="history-date">
                  Date: {formatDate(e.date)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="no-history">No meeting history found 📭</div>
      )}
    </div>
  );
}
