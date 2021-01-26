import React from 'react';

const Skillcard = ({ skill: { icon, title } }) =>
    <div className="col-lg-3">
        <div className="skill-card">
            <img src={icon} alt="icon" className="skill-card__icon" />
            <div className="skill-card-body">
                <h6 className="skill-card__title">{title}</h6>

            </div>

        </div>
    </div>

export default Skillcard;