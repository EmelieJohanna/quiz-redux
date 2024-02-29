import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./AdminModal.module.css";

const AdminModal = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLogin = () => {
    if (username === "a" && password === "p") {
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className={styles.modalOverlay} onClick={handleClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="username: a"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="password: p"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    )
  );
};

export default AdminModal;
