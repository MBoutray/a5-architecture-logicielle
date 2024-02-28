import React, { useState } from "react";
import "./CreateCharacterPage.css";

const CreateCharacterPage = () => {
  const [character, setCharacter] = useState({
    codeName: "",
    background: "",
    clearance: "",
    physical: "",
    mental: "",
    social: "",
    skills: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleSingleSelection = (field, value) => {
    setCharacter((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultipleSelection = (value) => {
    setCharacter((prev) => {
      const skills = prev.skills.includes(value)
        ? prev.skills.filter((skill) => skill !== value)
        : [...prev.skills, value];
      return { ...prev, skills };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(character, null, 2));
  };

  return (
    <div class="div-create-character-container">
      <h2>Create Your Agent</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Code Name:
          <input
            type="text"
            name="codeName"
            value={character.codeName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Background:
          <input
            type="text"
            name="background"
            value={character.background}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Clearance:
          <select
            name="clearance"
            value={character.clearance}
            onChange={handleInputChange}
          >
            <option value="">Select Clearance</option>
            <option value="Top Secret">Top Secret</option>
            <option value="Secret">Secret</option>
            <option value="Confidential">Confidential</option>
          </select>
        </label>
        <br />
        <label>
          Physical:
          <span className="button-group">
            <button
              type="button"
              onClick={() => handleSingleSelection("physical", "Muscular")}
              className={
                character.physical === "Muscular" ? "button-selected" : ""
              }
            >
              Muscular
            </button>
            <button
              type="button"
              onClick={() => handleSingleSelection("physical", "Tall")}
              className={character.physical === "Tall" ? "button-selected" : ""}
            >
              Tall
            </button>
          </span>
        </label>
        <br />
        <label>
          Mental:
          <span className="button-group">
            <button
              type="button"
              onClick={() => handleSingleSelection("mental", "Calm")}
              className={character.mental === "Calm" ? "button-selected" : ""}
            >
              Calm
            </button>
            <button
              type="button"
              onClick={() => handleSingleSelection("mental", "Energetic")}
              className={
                character.mental === "Energetic" ? "button-selected" : ""
              }
            >
              Energetic
            </button>
          </span>
        </label>
        <br />
        <label>
          Social:
          <span className="button-group">
            <button
              type="button"
              onClick={() => handleSingleSelection("social", "Introvert")}
              className={
                character.social === "Introvert" ? "button-selected" : ""
              }
            >
              Introvert
            </button>
            <button
              type="button"
              onClick={() => handleSingleSelection("social", "Persuasive")}
              className={
                character.social === "Persuasive" ? "button-selected" : ""
              }
            >
              Persuasive
            </button>
            <button
              type="button"
              onClick={() => handleSingleSelection("social", "Intimidating")}
              className={
                character.social === "Intimidating" ? "button-selected" : ""
              }
            >
              Intimidating
            </button>
          </span>
        </label>
        <br />
        <label>Skills:</label>
        <span className="button-group">
          <button
            type="button"
            onClick={() => handleMultipleSelection("Good driver")}
            className={
              character.skills.includes("Good driver") ? "button-selected" : ""
            }
          >
            Good Driver
          </button>
          <button
            type="button"
            onClick={() => handleMultipleSelection("Sniper")}
            className={
              character.skills.includes("Sniper") ? "button-selected" : ""
            }
          >
            Sniper
          </button>
        </span>
        <br />
        <button type="submit">Create Your Agent</button>
      </form>
    </div>
  );
};

export default CreateCharacterPage;
