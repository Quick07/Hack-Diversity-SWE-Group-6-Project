// Represents a patient
export function Patient(id, age, sex, name, bmi, ICUadmit, numOfAdmits, dob) {
  this.id = id; //patient ID
  this.age = age;
  this.sex = sex;
  this.name = name;
  this.bmi = bmi;
  this.dob = dob;
  this.ICUadmit = ICUadmit; //Is this patient an ICU admit?
  this.numOfAdmits = numOfAdmits;
}

//Represents an Exam
export function Exam(
  patientId,
  id,
  brixScore,
  keyFindings,
  imageURL,
  dob,
  name
) {
  this.name = name;
  this.patientId = patientId;
  this.id = id;
  this.brixScore = brixScore;
  this.keyFindings = keyFindings;
  this.imageURL = imageURL;
  this.dob = dob;
}

//An example of a Patient
export const patient1 = new Patient(
  'p0000250',
  20,
  'female',
  'Baldwin Acevedo',
  23.9,
  '1989-08-26',
  true,
  1
);

//An example of a Patient
export const patient2 = new Patient(
  'p00003641',
  9,
  'male',
  'Christina Brown',
  29.7,
  '1991-08-20',
  false,
  0
);

//An example of an exam using patient1's data
export const exam1 = new Exam(
  patient1.id,
  15283764,
  '6,7,3,2',
  'Patient has evidence of trauma on left clavicle Ex laboris reprehenderit aliqua sunt irure in. Occaecat culpa dolore officia culpa elit in ad amet.',
  'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png'
);

//An example of an exam using patient1's data
export const exam2 = new Exam(
  patient1.id,
  21383804,
  '4,2,1,2',
  'Patient is immuno-compromised and unable to recieve vaccine. Ex laboris reprehenderit aliqua sunt irure in. Occaecat culpa dolore officia culpa elit in ad amet.',
  'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png'
);

//An example of an exam using patient1's data
export const exam3 = new Exam(
  patient2.id,
  47313851,
  '4,7,1,3',
  'Patient is immuno-compromised and unable to recieve vaccine. Evidence of injury in right rib. Qui reprehenderit excepteur dolor elit irure amet eiusmod ad. Id ea elit cupidatat ut dolore consectetur.',
  'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png'
);
