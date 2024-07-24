import { Bar } from '@/components/ui/bar';
import { Title } from '@/components/ui/title';
import { DoorClosed } from 'lucide-react';

export default function Page() {
  const data = [
    {
      firstName: 'Benedikt',
      lastName: 'Winkler',
      class: '8c',
      locker: '#131'
    },
    {
      firstName: 'Alice',
      lastName: 'Smith',
      class: '7b',
      locker: '#215'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      class: '9a',
      locker: '#102'
    },
    {
      firstName: 'Emily',
      lastName: 'Brown',
      class: '6d',
      locker: '#311'
    },
    {
      firstName: 'Michael',
      lastName: 'Jones',
      class: '8b',
      locker: '#178'
    },
    {
      firstName: 'Sophia',
      lastName: 'Garcia',
      class: '7c',
      locker: '#243'
    },
    {
      firstName: 'Daniel',
      lastName: 'Martinez',
      class: '9b',
      locker: '#129'
    },
    {
      firstName: 'Olivia',
      lastName: 'Johnson',
      class: '6a',
      locker: '#387'
    },
    {
      firstName: 'Liam',
      lastName: 'Brown',
      class: '8c',
      locker: '#155'
    },
    {
      firstName: 'Ava',
      lastName: 'Wilson',
      class: '7d',
      locker: '#276'
    },
    {
      firstName: 'William',
      lastName: 'Taylor',
      class: '6b',
      locker: '#422'
    },
    {
      firstName: 'Emma',
      lastName: 'Anderson',
      class: '9c',
      locker: '#193'
    },
    {
      firstName: 'James',
      lastName: 'Adams',
      class: '8a',
      locker: '#132'
    },
    {
      firstName: 'Mia',
      lastName: 'Hernandez',
      class: '7a',
      locker: '#298'
    },
    {
      firstName: 'Alexander',
      lastName: 'Gonzalez',
      class: '6c',
      locker: '#365'
    },
    {
      firstName: 'Charlotte',
      lastName: 'Perez',
      class: '9d',
      locker: '#208'
    },
    {
      firstName: 'Benjamin',
      lastName: 'Lee',
      class: '8b',
      locker: '#186'
    },
    {
      firstName: 'Amelia',
      lastName: 'Scott',
      class: '7c',
      locker: '#254'
    },
    {
      firstName: 'Ethan',
      lastName: 'King',
      class: '6d',
      locker: '#333'
    },
    {
      firstName: 'Harper',
      lastName: 'Rivera',
      class: '9a',
      locker: '#114'
    },
    {
      firstName: 'Evelyn',
      lastName: 'Gomez',
      class: '8c',
      locker: '#142'
    },
    {
      firstName: 'Sebastian',
      lastName: 'Parker',
      class: '7b',
      locker: '#272'
    },
    {
      firstName: 'Zoe',
      lastName: 'Evans',
      class: '6a',
      locker: '#398'
    },
    {
      firstName: 'Henry',
      lastName: 'Morris',
      class: '9c',
      locker: '#199'
    },
    {
      firstName: 'Luna',
      lastName: 'Stewart',
      class: '8d',
      locker: '#167'
    },
    {
      firstName: 'Owen',
      lastName: 'Harris',
      class: '7d',
      locker: '#286'
    },
    {
      firstName: 'Lily',
      lastName: 'Cook',
      class: '6b',
      locker: '#409'
    },
    {
      firstName: 'Gabriel',
      lastName: 'Collins',
      class: '9b',
      locker: '#121'
    },
    {
      firstName: 'Sofia',
      lastName: 'Baker',
      class: '8a',
      locker: '#128'
    },
    {
      firstName: 'Carter',
      lastName: 'Young',
      class: '7c',
      locker: '#265'
    },
    {
      firstName: 'Hannah',
      lastName: 'Ward',
      class: '6d',
      locker: '#344'
    }
  ];

  return (
    <>
      <Title>Students</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {data.map((v, i) => (
          <Bar
            data={[
              [v.firstName, 'w-1/3'],
              [v.lastName, 'w-1/3'],
              [v.class, 'w-1/6'],
              [v.locker, 'w-1/6']
            ]}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
