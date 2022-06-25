import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import notes from "../images/Notes.svg";
function Notes1stsem() {
  let year_1 = [
    {
      subject_id: "CFE",
      subject_name: "Calculas For Enginnering",
      syll: [
        {
          pic: notes,
          unit_id: "1",
          unit_name: "Unit - 1",
          desc: "Click here to view unit 1",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
        {
          pic: notes,
          unit_id: "2",
          unit_name: "Unit - 2",
          desc: "Click here to view unit 2",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
        {
          pic: notes,
          unit_id: "3",
          unit_name: "Unit - 3",
          desc: "Click here to view unit 3",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
      ],
    },
    {
      subject_id: "c",
      subject_name: "Programming through C",
      syll: [
        {
          pic: notes,
          unit_id: "1",
          unit_name: "Unit - 1",
          desc: "Click here to view unit 1",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
        {
          pic: notes,
          unit_id: "2",
          unit_name: "Unit - 2",
          desc: "Click here to view unit 2",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
        {
          pic: notes,
          unit_id: "3",
          unit_name: "Unit - 3",
          desc: "Click here to view unit 3",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
      ],
    },
    {
      subject_id: "EP",
      subject_name: "Engineering Physics",
      syll: [
        {
          pic: notes,
          unit_id: "1",
          unit_name: "Unit - 1",
          desc: "Click here to view unit 1",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
        {
          pic: notes,
          unit_id: "2",
          unit_name: "Unit - 2",
          desc: "Click here to view unit 2",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
        {
          pic: notes,
          unit_id: "3",
          unit_name: "Unit - 3",
          desc: "Click here to view unit 3",
          u_link:
            "https://docs.google.com/presentation/d/1N_Y62mKoB4wyUpq8p7gyb_pPgqKwUGbR/edit#slide=id.p1",
        },
      ],
    },
  ];
  // sessionStorage.setItem("semTitle","1st Semister")

  return (
    <div className="container text-center">
      <p className="display-5 semTitle">1st Semester Notes</p>
      <div className="accordion" id="accordianexample">
        {year_1.map((subject, ind) => (
          <div className="accordion-item" key={subject.subject_id}>
            <h2
              className="accordion-header"
              id={subject.subject_id + "Heading"}
            >
              <button
                className={
                  ind == 0 ? "accordion-button " : "accordion-button collapsed"
                }
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#" + subject.subject_id + "Content"}
                aria-expanded="true"
                aria-controls={subject.subject_id + "-content"}
              >
                {subject.subject_name}
              </button>
            </h2>
            <div
              id={subject.subject_id + "Content"}
              className={
                ind == 0
                  ? "accordion-collapse collapse show"
                  : "accordion-collapse collapse"
              }
              aria-labelledby={subject.subject_id + "Heading"}
              data-bs-parent="#accordianexample"
            >
              <div className="accordion-body">
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-md-3"
                  id={"myItems"}
                >
                  {subject.syll.map((eachunit) => (
                    <div className="col" key={eachunit.unit_id}>
                      <div className="card shadow" style={{ width: "18 rem" }}>
                        <img src={eachunit.pic}></img>
                        <div className="card-body text-center">
                          <h5 className="card-title">{eachunit.unit_name}</h5>
                          <p className="card-text">{eachunit.desc}</p>
                          <a
                            href={eachunit.u_link}
                            className="btn btn-primary"
                            target={"_blank"}
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Notes1stsem;
