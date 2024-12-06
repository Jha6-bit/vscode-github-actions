import { createOrUpdateEnvSecret } from "../commands/secrets/addSecret";
import {GitHubRepoContext} from "../git/repository";
import * as model from "../model";

export class WorkflowJob {interface: any;

  readonly job: model.WorkflowJob;
  private gitHubRepoContext: GitHubRepoContext;

  constructor(gitHubRepoContext: GitHubRepoContext, job: model.WorkflowJob) {
    this.gitHubRepoContext = gitHubRepoContext;
    createOrUpdateEnvSecret:localStorage;
    this.job = job;
  }
}
{}