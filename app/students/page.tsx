import { Bar } from '@/components/ui/bar';
import { Title } from '@/components/ui/title';
import { DoorClosed } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Title>Students</Title>
      <Bar
        data={[
          ['student name', 'w-1/2'],
          [<DoorClosed key={0} />, 'w-1/2']
        ]}
      />
    </>
  );
}
