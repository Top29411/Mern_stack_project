import { API } from "./API";

export interface Issue {
  projectId: string;
  creatorId: string;
  issueTypeId: string;
  assigneeId: string;
  priorityId: string;
  statusId: string;
  epicId: string;
  index: number;
  summary: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateIssue {
  success: boolean;
  error: string;
  data: Issue;
}
export const createIssue = async (
  issue: Partial<Issue>
): Promise<CreateIssue> => {
  try {
    const { data } = await API.post("/issue", issue);
    return data;
  } catch (err) {
    return err;
  }
};

export interface GetIssue {
  success: boolean;
  data: Issue;
}
export const getIssue = async (id: string): Promise<GetIssue> => {
  try {
    const { data } = await API.get(`/issue/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};

export interface GetIssues {
  success: boolean;
  data: Issue[];
  error: string;
}
export const getIssues = async (): Promise<GetIssues> => {
  try {
    const { data } = await API.get("/issues");
    return data;
  } catch (err) {
    return err;
  }
};

export interface UpdateIssue {
  success: boolean;
  message: string;
}
export const updateIssue = async (
  id: string,
  issue: Partial<Issue>
): Promise<UpdateIssue> => {
  try {
    const { data } = await API.put(`/issue/${id}`, issue);
    return data;
  } catch (err) {
    return err;
  }
};

export interface DeleteIssue {
  success: boolean;
  id: string;
  error: string;
}
export const deleteIssue = async (id: string): Promise<DeleteIssue> => {
  try {
    const { data } = await API.delete(`/issue/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};
