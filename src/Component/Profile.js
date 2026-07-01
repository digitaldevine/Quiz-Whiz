import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await fetch(
                    "https://backend-7aq8.onrender.com/api/auth/profile",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await res.json();

                if (data.success) {
                    setUser(data.user);
                }

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();

        // 🔥 live update (leaderboard feel)
        const interval = setInterval(fetchProfile, 3000);

        return () => clearInterval(interval);

    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/signin";
    };

    if (loading) {
        return (
            <div className="loader">
                Loading Leaderboard...
            </div>
        );
    }

    if (!user) {
        return (
            <div className="loader">
                No User Found
            </div>
        );
    }

    return (
        <div className="profile-page">

            {/* HEADER */}
            <div className="top-bar">
                <h1>🏆 Leaderboard Profile</h1>
            </div>

            {/* USER CARD */}
            <div className="user-card">

                <div className="user-info">
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </div>

                <div className="stats">
                    <div>
                        <h3>{user.score}</h3>
                        <p>Score</p>
                    </div>

                    <div>
                        <h3>{user.solvedQuestions}</h3>
                        <p>Solved</p>
                    </div>

                    <div>
                        <h3>{user.solvedList?.length || 0}</h3>
                        <p>Attempts</p>
                    </div>
                </div>
            </div>

            {/* LEADERBOARD LIST */}
            <div className="board">

                <h2>🔥 Solved Questions</h2>

                {user.solvedList && user.solvedList.length > 0 ? (
                    <div className="board-list">
                        {user.solvedList.map((q, index) => (
                            <div className="board-item" key={index}>
                                <span className="rank">#{index + 1}</span>
                                <span className="qid">Question ID: {q}</span>
                                <span className="status">✔ Solved</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty">No questions solved yet</p>
                )}

            </div>

            {/* LOGOUT */}
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>

        </div>
    );
}

export default Profile;