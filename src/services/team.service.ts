import { AxiosResponse } from 'axios';
import interceptor from './interceptor';
import { ICreateTeam, IJoinTeam } from '@/interfaces/team.interface';

export const teamEndpoint = '/teams';

export const retrieveTeams = async (url: string) => {
  const res = await interceptor.get(url);

  return res.data;
};

export const retrieveJoinedTeams = async (url: string) => {
  const res = await interceptor.get(url);

  return res.data;
};

export const createNewTeam = async ({ orgId, payload }: ICreateTeam) => {
  const res = await interceptor.post(teamEndpoint, {
    organizationId: orgId,
    payload,
  });

  return res.data;
};

export const joinTeam = async ({ url, teamId, orgId }: IJoinTeam) => {
  const res = await interceptor.post(`${url}?team=${teamId}&org=${orgId}`);

  return res.data;
};
