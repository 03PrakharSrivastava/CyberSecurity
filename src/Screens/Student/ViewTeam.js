import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import auth from '../../Components/Auth';
import NoDataFound from '../../Components/NoDataFound';

const PreviousTeamStudent = () => {
    const username = localStorage.getItem('username');
    const [teams, setTeams] = useState([]);
    const [type, setType] = useState(undefined);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/student/${username}/quizzes`);
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };

        async function fetchData() {
            try {
                const userType = await auth();
                setType(userType);
                fetchTeams();
            } catch (error) {
                console.error('Error:', error.message);
                setType(null);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            {type === "student" ? (
                <div className="quiz-list-container">
                    <div>
                        <h2>Teams </h2>
                        <ul>
                            {teams.length!==0 && teams.map((team) => (
                                <li key={team._id}>
                                    <h6>{team.teamName}</h6>
                                    <Link to={`/team/student/${team._id}`}><button className='view-btn'>View Team</button></Link>
                                </li>
                            ))}

                            {teams.length===0 && <NoDataFound />}
                        </ul>
                    </div>
                </div>
            ) : (
                type === undefined ? null : <NotFound />
            )}
        </>
    );
};

export default PreviousTeamStudent;