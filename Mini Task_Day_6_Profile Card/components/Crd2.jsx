
function Crd2() {
    return (
        <div id="card-skills">
            {["ReactJS", "NodeJS", "JavaScript", "SQL", "Python", "MongoDB", "React Hooks", "React Native"].map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
            ))}
        </div>
    );
}
export default Crd2;