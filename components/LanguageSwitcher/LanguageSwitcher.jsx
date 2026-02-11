import { FormControlLabel, Switch } from '@mui/material'

function LanguageSwitcher({ isEnglish, setIsEnglish }) {
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={isEnglish}
            onChange={() => setIsEnglish(!isEnglish)}
            color='primary'
          />
        }
        label={isEnglish ? 'English' : 'Русский'}
      />
    </div>
  )
}

export default LanguageSwitcher
