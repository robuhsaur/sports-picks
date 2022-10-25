import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from "react-router-dom";
import Subscribe from "../subscribe";
import { useToken } from "../Auth";
function UsersGurus(props) {
  const [gurus, setGurus] = useState([]);
  const [token] = useToken();

  useEffect(() => {
    async function getGurus() {
      if (!token) return;
      const url = `${process.env.REACT_APP_API_HOST}/my-gurus`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setGurus(data);
      }
    }
    getGurus();
  }, [token]);

  const navigate = useNavigate();

  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <div className="card">
          <Scrollbars style={{ width: 500, height: 300 }}>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="th-sm">Guru</th>
                  <th className="th-sm">Pick</th>
                  <th className="th-sm">Pick Detail</th>
                </tr>
              </thead>
              <tbody>
                {gurus.map((guru) => {
                  return (
                    <>
                      <tr key={guru.id}>
                        <td>{guru.user_name}</td>
                        <td>{guru.pick}</td>
                        <td>{guru.pick_detail}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default UsersGurus;

// pleas show me old source code
