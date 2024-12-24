import { FaUsers } from "react-icons/fa6";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaRegCopy,
} from "react-icons/fa";
import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const adminInfo = [
  {
    id: "editor",
    name: "Editor",
    email: "admin2@gmail.com",
    password: "admin2@9866",
  },
  {
    id: "superAdmin",
    name: "Super Admin",
    email: "admin1@gmail.com",
    password: "admin1@9866",
  },
];

const doctorsInfo = [
  {
    id: 1,
    name: "Dr. Richard James",
    email: "richard@gmail.com",
    password: "richard@9866",
  },
  {
    id: 2,
    name: "Dr. Emily Larson",
    email: "emily@gmail.com",
    password: "emily@9866",
  },
  {
    id: 3,
    name: "Dr. Sarah Patel",
    email: "sarah@gmail.com",
    password: "sarah@9866",
  },
  {
    id: 4,

    name: "Dr. Christopher Lee",
    email: "christopher@gmail.com",
    password: "christopher@9866",
  },
  {
    id: 5,
    name: "Dr. Jennifer Garcia",
    email: "jennifer@gmail.com",
    password: "jennifer@9866",
  },
  {
    id: 6,
    name: "Dr. Andrew Williams",
    email: "andrew@gmail.com",
    password: "andrew@9866",
  },
  {
    id: 7,
    name: "Dr. Timothy White",
    email: "timothy@gmail.com",
    password: "timothy@9866",
  },
  {
    id: 8,
    name: "Dr. Ava Mitchell",
    email: "ava@gmail.com",
    password: "ava@9866",
  },
  {
    id: 9,
    name: "Dr. Jeffrey King",
    email: "jeffrey@gmail.com",
    password: "jeffrey@9866",
  },
  {
    id: 10,
    name: "Dr. Zoe Kelly",
    email: "zoe@gmail.com",
    password: "zoe@9866",
  },
  {
    id: 11,
    name: "Dr. Patrick Harris",
    email: "patrick@gmail.com",
    password: "patrick@9866",
  },
  {
    id: 12,
    name: "Dr. Chloe Evans",
    email: "chloe@gmail.com",
    password: "chloe@9866",
  },
  {
    id: 13,
    name: "Dr. Ryan Martinez",
    email: "ryan@gmail.com",
    password: "ryan@9866",
  },
  {
    id: 14,
    name: "Dr. Jennifer Garcia",
    email: "jennifer@gmail.com",
    password: "jennifer@9866",
  },
];

const Credentials = () => {
  const [credClicked, setCredClicked] = useState<boolean>(false);
  const [buttonClicked, setButtonCLicked] = useState<boolean>(true);
  const [buttonText, setButtonText] = useState<string>("");
  const [button1, setbutton1] = useState<boolean>(true);
  const [docId, setDocId] = useState<number>(0);
  const [adminId, setAdminId] = useState<string>("");

  const arrowReturn = (id: any) => {
    return docId === id ? (
      <FaAngleUp color="#475569" size={20} />
    ) : (
      <FaAngleDown color="#475569" size={20} />
    );
  };

  const toggleDocId = (id: any) => {
    setDocId((prevDocId) => (prevDocId === id ? null : id));
  };
  const toggleAdminId = (id: any) => {
    setAdminId((prevAdminId) => (prevAdminId === id ? "" : id));
  };

  const handleCopy = (text: string) => {
    console.log("Copying text:", text);
    navigator.clipboard.writeText(text);
  };

  const doctorCredentials = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "-10px",
          }}
        >
          <button
            onClick={() => {
              setbutton1(false);
              setButtonCLicked(true);
            }}
            style={{
              backgroundColor: "#1e293b",
              cursor: "pointer",
              borderWidth: "0px",
              borderRadius: "20px",
              height: "30px",
              paddingTop: "6px",
              marginRight: "5px",
            }}
          >
            <FaAngleLeft color="white" size={20} />
          </button>
          <p
            style={{
              color: "white",
              paddingBottom: "1px",
              fontFamily: "Cambria",
              fontSize: "18px",
            }}
          >
            Doctor Credentials
          </p>
        </div>
        {doctorsInfo.map((item: any) => (
          <li key={item.id} className="littles">
            <div className="dfg">
              <p style={{ paddingLeft: "10px", fontSize: "18px" }}>
                {item.name}
              </p>
              <button
                style={{
                  marginLeft: "auto",
                  backgroundColor: "white",
                  cursor: "pointer",
                  borderWidth: "0px",
                  borderRadius: "10px",
                  height: "30px",
                  width: "30px",
                  paddingTop: "4px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  toggleDocId(item.id);
                }}
              >
                {arrowReturn(item.id)}
              </button>
            </div>
            {docId === item.id ? (
              <>
                <p
                  style={{
                    paddingLeft: "10px",
                    marginTop: "-2px",
                    fontSize: "18px",
                  }}
                >
                  <span style={{ color: " #B0C4DE" }}>EMAIL: </span>
                  <span style={{ color: "#FFFACD" }}>{item.email}</span>
                  <button
                    onClick={() => {
                      handleCopy(item.email);
                    }}
                    className="bnm"
                  >
                    <MdOutlineContentCopy
                      style={{
                        cursor: "pointer",
                      }}
                      size={14}
                    />
                  </button>
                </p>

                <p
                  style={{
                    paddingLeft: "10px",
                    marginTop: "-10px",
                    fontSize: "18px",
                  }}
                >
                  <span style={{ color: " #B0C4DE" }}>PASSWORD: </span>
                  <span style={{ color: "#FFFACD" }}>{item.password}</span>

                  <button
                    onClick={() => {
                      handleCopy(item.password);
                    }}
                    className="bnm"
                  >
                    <MdOutlineContentCopy
                      style={{
                        cursor: "pointer",
                      }}
                      size={14}
                    />
                  </button>
                </p>
              </>
            ) : null}
          </li>
        ))}
      </>
    );
  };

  const adminCredentials = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "-10px",
          }}
        >
          <button
            onClick={() => {
              setbutton1(false);
              setButtonCLicked(true);
            }}
            style={{
              backgroundColor: "#1e293b",
              cursor: "pointer",
              borderWidth: "0px",
              borderRadius: "20px",
              height: "30px",
              paddingTop: "6px",
              marginRight: "5px",
            }}
          >
            <FaAngleLeft color="white" size={20} />
          </button>
          <p
            style={{
              color: "white",
              paddingBottom: "1px",
              fontFamily: "Cambria",
              fontSize: "18px",
            }}
          >
            Admin Credentials
          </p>
        </div>

        {adminInfo.map((item: any) => (
          <li key={item.id} className="littles">
            <div className="dfg">
              <p style={{ paddingLeft: "10px", fontSize: "18px" }}>
                {item.name}
              </p>
              <button
                style={{
                  marginLeft: "auto",
                  backgroundColor: "white",
                  cursor: "pointer",
                  borderWidth: "0px",
                  borderRadius: "10px",
                  height: "30px",
                  width: "30px",
                  paddingTop: "4px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  toggleAdminId(item.id);
                }}
              >
                {arrowReturn(item.id)}
              </button>
            </div>
            {adminId === item.id ? (
              <>
                <p
                  style={{
                    paddingLeft: "10px",
                    marginTop: "-2px",
                    fontSize: "18px",
                  }}
                >
                  <span style={{ color: " #B0C4DE" }}>EMAIL: </span>
                  <span style={{ color: "#FFFACD" }}>{item.email}</span>
                  <button
                    onClick={() => {
                      handleCopy(item.email);
                    }}
                    className="bnm"
                  >
                    <MdOutlineContentCopy
                      style={{
                        cursor: "pointer",
                      }}
                      size={14}
                    />
                  </button>
                </p>

                <p
                  style={{
                    paddingLeft: "10px",
                    marginTop: "-10px",
                    fontSize: "18px",
                  }}
                >
                  <span style={{ color: " #B0C4DE" }}>PASSWORD: </span>
                  <span style={{ color: "#FFFACD" }}>{item.password}</span>

                  <button
                    onClick={() => {
                      handleCopy(item.password);
                    }}
                    className="bnm"
                  >
                    <MdOutlineContentCopy
                      style={{
                        cursor: "pointer",
                      }}
                      size={14}
                    />
                  </button>
                </p>
              </>
            ) : null}
          </li>
        ))}
      </>
    );
  };

  const returner =
    buttonText === "Admin" ? adminCredentials() : doctorCredentials();

  return (
    <>
      <div className="credentials">
        <button
          className="ochako"
          onClick={() => {
            setCredClicked((prev) => !prev);
            setbutton1(false);
            setButtonCLicked(true);
            setDocId(0);
          }}
        >
          <FaUsers color="skyBlue" size={35} />
        </button>
      </div>

      {credClicked && (
        <div className="main-cred">
          <div className="qwe">
            <p style={{ paddingLeft: "10px", fontSize: "18px" }}>Credentials</p>
            <button
              onClick={() => {
                setCredClicked(false);
              }}
              style={{
                marginLeft: "auto",
                backgroundColor: "#1e293b",
                cursor: "pointer",
                borderWidth: "0px",
                borderRadius: "20px",
                height: "30px",
                marginRight: "10px",
              }}
            >
              <FaAngleDown color="white" size={20} />
            </button>
          </div>
          <hr style={{ marginTop: "-5px" }} color="#2d3f5a" />
          {buttonClicked && (
            <>
              {/* Admin Credentials Button */}
              <div
                onClick={() => {
                  setButtonCLicked(false);
                  setButtonText("Admin");
                  setbutton1(true);
                }}
                className="little"
              >
                <MdOutlineAdminPanelSettings
                  style={{ paddingLeft: "5px" }}
                  color="white"
                  size={30}
                />
                <p style={{ paddingLeft: "10px", fontSize: "18px" }}>
                  Admin Credentials
                </p>
                <button
                  style={{
                    marginLeft: "auto",
                    backgroundColor: "white",
                    cursor: "pointer",
                    borderWidth: "0px",
                    borderRadius: "10px",
                    height: "30px",
                    width: "30px",
                    paddingTop: "4px",
                    marginRight: "10px",
                  }}
                >
                  <FaAngleRight color="#475569" size={20} />
                </button>
              </div>

              {/* Doctor Credentials Button */}
              <div
                onClick={() => {
                  setButtonCLicked(false);
                  setButtonText("Doctor");
                  setbutton1(true);
                }}
                className="little"
              >
                <FaUserDoctor
                  style={{ paddingLeft: "5px" }}
                  color="white"
                  size={25}
                />
                <p style={{ paddingLeft: "15px", fontSize: "18px" }}>
                  Doctor Credentials
                </p>
                <button
                  style={{
                    marginLeft: "auto",
                    backgroundColor: "white",
                    cursor: "pointer",
                    borderWidth: "0px",
                    borderRadius: "10px",
                    height: "30px",
                    width: "30px",
                    paddingTop: "4px",
                    marginRight: "10px",
                  }}
                >
                  <FaAngleRight color="#475569" size={20} />
                </button>
              </div>
            </>
          )}
          {button1 && <>{returner}</>}
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Credentials;
