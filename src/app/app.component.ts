import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly proverbs: Array<string> = [
    'Dans une querelle, la personne sage se tait.',
    'Le plus fort a toujours raison.',
    'Les mots doux arrangent les choses.',
    'Les bons comptes font les bons amis.',
    'Du choc des idées vient la lumière.',
    'Reste loin des gens qui sont en désaccord avec toi.',
    'Le conquérant c\'est celui qui fait fuir ses ennemis.',
    'Désarme ton ennemi avec ta douceur et ta bonté.',
    'Faire un compromis évite les querelles.',
    'Personne n\'a la réponse finale, chacun a une pièce qui y contribue.',
    'Évite les querelleurs car ils te rendent la vie misérable.',
    'L\'important c\'est d\'avoir raison.',
    'Les mots tendres assurent l\'harmonie.',
    'Oeil pour oeil, dent pour dent.',
    'Si je peux mettre de côté mes idées, je peux écouter celles des autres.'
  ];

  readonly totems = [
    {
      name: 'turtle',
      link: 'http://pluspng.com/img-png/hawaiian-turtle-png-tribal-turtle-clipart-282.png',
      description: 'Évite le conflit, se retire, abandonne ses buts et ses relations espérant que le conflit disparaîtra par magie.'
    },
    {
      name: 'owl',
      link: 'http://res.freestockphotos.biz/pictures/16/16851-illustration-of-an-owl-pv.png',
      description: 'Valorise la relation et le but qu\'il poursuit. Il écoute l\'autre pour trouver ensemble une solution satisfaisante aux deux parties.'
    },
    {
      name: 'fox',
      link: 'https://orig00.deviantart.net/d61c/f/2011/116/4/c/4c637ade2ad93105318d482fc3803aed-d3eytjl.png',
      description: 'Cherche le compromis. Il renonce à une partie de son but et persuade l\'autre d\'en abandonner une partie.'
    },
    {
      name: 'teddyBear',
      link: 'https://clip2art.com/images/glitch-clipart-outline-6.png',
      description: 'Sacrifie son but au profit de la relation tellement il veut être aimé et a peur d\'abîmer la relation.'
    },
    {
      name: 'shark',
      link: 'http://pngimg.com/uploads/tattoo/tattoo_PNG5460.png',
      description: 'Essaie de dominer les autres et de gagner à n\'importe quel prix. Il est agressif, menaçant, attaquant.'
    }
  ];

  isSubmitting = false;

  totemFormGroup: FormGroup;
  finalTotem: string;

  constructor(private formBuilder: FormBuilder) {
  }

  get question1FormControl(): FormControl {
    return this.totemFormGroup.get('question1') as FormControl;
  }

  get question2FormControl(): FormControl {
    return this.totemFormGroup.get('question2') as FormControl;
  }

  get question3FormControl(): FormControl {
    return this.totemFormGroup.get('question3') as FormControl;
  }

  get question4FormControl(): FormControl {
    return this.totemFormGroup.get('question4') as FormControl;
  }

  get question5FormControl(): FormControl {
    return this.totemFormGroup.get('question5') as FormControl;
  }

  get question6FormControl(): FormControl {
    return this.totemFormGroup.get('question6') as FormControl;
  }

  get question7FormControl(): FormControl {
    return this.totemFormGroup.get('question7') as FormControl;
  }

  get question8FormControl(): FormControl {
    return this.totemFormGroup.get('question8') as FormControl;
  }

  get question9FormControl(): FormControl {
    return this.totemFormGroup.get('question9') as FormControl;
  }

  get question10FormControl(): FormControl {
    return this.totemFormGroup.get('question10') as FormControl;
  }

  get question11FormControl(): FormControl {
    return this.totemFormGroup.get('question11') as FormControl;
  }

  get question12FormControl(): FormControl {
    return this.totemFormGroup.get('question12') as FormControl;
  }

  get question13FormControl(): FormControl {
    return this.totemFormGroup.get('question13') as FormControl;
  }

  get question14FormControl(): FormControl {
    return this.totemFormGroup.get('question14') as FormControl;
  }

  get question15FormControl(): FormControl {
    return this.totemFormGroup.get('question15') as FormControl;
  }

  get isFormDisabled(): boolean {
    return this.isSubmitting || !this.totemFormGroup.valid;
  }

  get turtleTotem(): string {
    return 'turtle';
  }

  get turtleTotemLink(): string {
    return this.totems.find(totem => totem.name === 'turtle').link;
  }

  get turtleTotemDescription(): string {
    return this.totems.find(totem => totem.name === 'turtle').description;
  }

  get owlTotem(): string {
    return 'owl';
  }

  get owlTotemLink(): string {
    return this.totems.find(totem => totem.name === 'owl').link;
  }

  get owlTotemDescription(): string {
    return this.totems.find(totem => totem.name === 'owl').description;
  }

  get teddyBearTotem(): string {
    return 'teddyBear';
  }

  get teddyBearTotemLink(): string {
    return this.totems.find(totem => totem.name === 'teddyBear').link;
  }

  get teddyBearTotemDescription(): string {
    return this.totems.find(totem => totem.name === 'teddyBear').description;
  }

  get sharkTotem(): string {
    return 'shark';
  }

  get sharkTotemLink(): string {
    return this.totems.find(totem => totem.name === 'shark').link;
  }

  get sharkTotemDescription(): string {
    return this.totems.find(totem => totem.name === 'shark').description;
  }

  get foxTotem(): string {
    return 'fox';
  }

  get foxTotemLink(): string {
    return this.totems.find(totem => totem.name === 'fox').link;
  }

  get foxTotemDescription(): string {
    return this.totems.find(totem => totem.name === 'fox').description;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onTotemFormSubmit(formData): void {
    window.scrollTo(0, 0);
    this.processData(formData);
  }

  onResetButtonClick(): void {
    this.totemFormGroup.reset();
    this.finalTotem = null;
  }

  private initForm(): void {
    this.totemFormGroup = this.formBuilder.group({
      question1: new FormControl('', Validators.required),
      question2: new FormControl('', Validators.required),
      question3: new FormControl('', Validators.required),
      question4: new FormControl('', Validators.required),
      question5: new FormControl('', Validators.required),
      question6: new FormControl('', Validators.required),
      question7: new FormControl('', Validators.required),
      question8: new FormControl('', Validators.required),
      question9: new FormControl('', Validators.required),
      question10: new FormControl('', Validators.required),
      question11: new FormControl('', Validators.required),
      question12: new FormControl('', Validators.required),
      question13: new FormControl('', Validators.required),
      question14: new FormControl('', Validators.required),
      question15: new FormControl('', Validators.required),
    });
  }

  private processData(answers): any {
    const totems = [
      {
        totem: 'turtle',
        value: (parseInt(answers.question1) + parseInt(answers.question6) + parseInt(answers.question11))
      },
      {
        totem: 'shark',
        value: (parseInt(answers.question2) + parseInt(answers.question7) + parseInt(answers.question12))
      },
      {
        totem: 'teddyBear',
        value: (parseInt(answers.question3) + parseInt(answers.question8) + parseInt(answers.question13))
      },
      {
        totem: 'fox',
        value: (parseInt(answers.question4) + parseInt(answers.question9) + parseInt(answers.question14))
      },
      {
        totem: 'owl',
        value: (parseInt(answers.question5) + parseInt(answers.question10) + parseInt(answers.question15))
      }
    ];
    this.finalTotem = totems.sort((a, b) => b.value - a.value)[0].totem;
  }
}
