//Represents a patient
export function Patient(id, age, sex, zip, bmi, weight, ICUadmit, numOfAdmits) {
    this.id = id; //patient ID
    this.age = age;
    this.sex = sex;
    this.zip = zip;
    this.bmi = bmi;
    this.weight = weight;
    this.ICUadmit = ICUadmit; //Is this patient an ICU admit?
    this.numOfAdmits = numOfAdmits;
}

//Represents an Exam
export function Exam(patientId, id, brixScore, keyFindings, imageURL) {
    this.patientId = patientId;
    this.id = id;
    this.brixScore = brixScore;
    this.keyFindings = keyFindings;
    this.imageURL= imageURL;
}
export const patients = [
    {
      patientId: 'COVID-19-AR-16434409',
      age: '51',
      sex: 'M',
      zip: '722',
      bmi: '37.7',
      weight: '207',
      ICUadmit: 'N',
      numOfAdmits: '0',
    },
    {
      patientId: 'COVID-19-AR-16434381',
      age: '44',
      sex: 'F',
      zip: '721',
      bmi: '64.6',
      weight: '412',
      ICUadmit: 'N',
      numOfAdmits: '0',
    }
  ]

  export const exams =  [
    {
      patientId: 'COVID-19-AR-16434409',
      examId: 'Exam-1',
      brixScore: '1,2,3,4',
      keyFindings:
        'Patient is immuno-compromised and unable to recieve vaccine. Evidence of injury in right rib.',
      imageURL:
        'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434409_XR_CHEST_AP_PORTABLE_1.png',
    },
    {
      patientId: 'COVID-19-AR-16434381',
      examId: 'Exam-1',
      brixScore: '4,1,7,3',
      keyFindings: 'Patient has evidence of trauma on left clavicle',
      imageURL:
        'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png',
    },
    {
      patientId: 'COVID-19-AR-16434381',
      examId: 'Exam-2',
      brixScore: '4,6,5,4',
      keyFindings: 'Patient has evidence of trauma on left clavicle',
      imageURL:
        'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_PA_AND_LATERAL_4.png',
    }
  ]

export const data = [
  {
    patients: [
      {
        patientId: 'COVID-19-AR-16434409',
        age: '51',
        sex: 'M',
        zip: '722',
        bmi: '37.7',
        weight: '207',
        ICUadmit: 'N',
        numOfAdmits: '0',
      },
      {
        patientId: 'COVID-19-AR-16434381',
        age: '44',
        sex: 'F',
        zip: '721',
        bmi: '64.6',
        weight: '412',
        ICUadmit: 'N',
        numOfAdmits: '0',
      }
    ]
},
{
    exams: [
      {
        patientId: 'COVID-19-AR-16434409',
        examId: 'Exam-1',
        brixScore: '1,2,3,4',
        keyFindings:
          'Patient is immuno-compromised and unable to recieve vaccine. Evidence of injury in right rib.',
        imageURL:
          'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434409_XR_CHEST_AP_PORTABLE_1.png',
      },
      {
        patientId: 'COVID-19-AR-16434381',
        examId: 'Exam-1',
        brixScore: '4,1,7,3',
        keyFindings: 'Patient has evidence of trauma on left clavicle',
        imageURL:
          'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png',
      },
      {
        patientId: 'COVID-19-AR-16434381',
        examId: 'Exam-2',
        brixScore: '4,6,5,4',
        keyFindings: 'Patient has evidence of trauma on left clavicle',
        imageURL:
          'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_PA_AND_LATERAL_4.png',
      }
    ]
  }
];

//An example of a Patient
export const patient1 = new Patient('p0000250', 20, 'female', 722, 23.9, 175, true, 1)

//An example of a Patient
export const patient2 = new Patient('p00003641', 9, 'male', 952, 29.7, 195, false, 0)

//An example of an exam using patient1's data
export const exam1 = new Exam( patient1.id, 15283764, '6,7,3,2', 'Patient has evidence of trauma on left clavicle',
'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png')

//An example of an exam using patient1's data
export const exam2 = new Exam( patient1.id, 21383804, '4,2,1,2', 'Patient is immuno-compromised and unable to recieve vaccine.',
'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png')

//An example of an exam using patient1's data
export const exam3 = new Exam (patient2.id, 47313851, '4,7,1,3', 'Patient is immuno-compromised and unable to recieve vaccine. Evidence of injury in right rib.',
'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_ONLY_3.png')
