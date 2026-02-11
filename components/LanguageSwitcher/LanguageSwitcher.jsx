import { FormControlLabel, Switch } from "@mui/material";
import cl from "classnames";
import { useState } from "react";
import styles from "./LanguageSwitcher.module.scss";

function LanguageSwitcher({ isEnglish, setIsEnglish }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.switchWrapper}>
      <FormControlLabel
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        control={
          <Switch
            checked={isEnglish}
            onChange={() => setIsEnglish(!isEnglish)}
          />
        }
        label={
          <span className={cl(styles.label, isHovered && styles.labelHovered)}>
            {isEnglish ? 'Eng' : 'Рус'}
          </span>
        }
      />
    </div>
  );
}

export default LanguageSwitcher;
