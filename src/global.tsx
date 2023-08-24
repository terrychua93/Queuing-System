const UserProfile = {
  id: '0DFED648-4973-4A08-959C-835DD59A3D95',
  patientId: 'S1234567D',
  patientName: 'Francis Tan',
  patientDOB: '1975-07-06 00:00:00.0000000 +00:00',
  Gender: 'Male',
  Nationality: 'Malaysian'
}

const AppointmentType = [
  {
    id: '8E5F6D7F-556A-4464-9DEC-08DBA38078F4',
    type: 'Dental'
  },
  {
    id: '2CE07A35-ED39-42FC-B727-069FFD1F8FF2',
    type: 'Eye Care'
  },
  {
    id: '6160A3F7-9E75-4DDC-952F-2D8BF3C51E37',
    type: 'Vaccinations'
  },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  UserProfile,
  AppointmentType
};
