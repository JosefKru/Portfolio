import { FormControlLabel, Switch } from '@material-ui/core'

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
