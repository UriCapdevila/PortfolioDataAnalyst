export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
  progressColor: string;
  titleColor: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: {
    id: string;
    url: string;
    hint: string;
  };
  reportUrl: string;
};
