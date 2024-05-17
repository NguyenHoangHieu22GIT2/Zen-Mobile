type Notification = {
  _id: string;
  subjectId: string;
  verb: string;
  directObjectId: string;
  indirectObjectId: string;
  prepObjectId: string;
  referenceLink: string;
  read: boolean;
  createdAt: Date;
};
export { Notification };
