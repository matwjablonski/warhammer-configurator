import { Button } from '@/app/components/Button';
import { useConfiguratorStore } from '../../store/useConfiguratorStore';

type ResultProps = {
  result: string;
  rollType: string;
  rollNumber: number;
}

export const Result = ({ result, rollType, rollNumber }: ResultProps) => {
  const { cleanRoll } = useConfiguratorStore();

  const handleClean = () => {
    cleanRoll(rollType)
  }

  return (
    <div className="flex gap-8 items-center">
      <div>
        <h2 className={`
          font-medieval
          text-2xl
          text-primary
          mt-8
        `}>Twój wybór to: <strong className="text-secondary">{result}</strong></h2>
        <p className="text-dark-grey mb-4">Losowanie nr: {rollNumber}</p>
      </div>
      <Button label="Zmień" type="button" onClick={handleClean} outlined small />
    </div>
  )
}
