import React from 'react';
import './Leaderboard.css';

interface Score {
  name: string;
  points: number;
}

interface LeaderboardProps {
  scores: Score[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <div className="leaderboard-list">
        {scores.map((score, index) => (
          <div key={index} className="leaderboard-item">
            <span className="rank">{index + 1}.</span>
            <span className="name">{score.name}</span>
            <span className="points">{score.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;