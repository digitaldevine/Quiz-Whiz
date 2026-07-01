import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css";

function Leaderboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchLeaderboard = async () => {
      try {

        const res = await axios.get("http://localhost:5000/api/leaderboard");

        if (res.data.success) {
          setUsers(res.data.users);
        }

      } catch (err) {
        console.log(err);
      }
    };

    fetchLeaderboard();

  }, []);

  return (

    <section className="leaderboard">

      <h1>🏆 Leaderboard</h1>

      <div className="leaderboard-container">

        {users.map((user) => (

          <div className="leader-card" key={user.rank}>

            <div className="rank">
              #{user.rank}
            </div>

            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.score} Points</p>
            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Leaderboard;