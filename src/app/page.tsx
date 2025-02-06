import { Container } from '@/app/components/Container';
import { Button } from '@/app/components/Button';

export default function Home() {
  return (
    <Container>
      
      <Button asLink href="/configurator" label="Stwórz nową postać" />
    </Container>
  );
}
