# webb22_alm_cicd
---
## *Application-Lifecycle-Managment - group assignment*
### How to run project
1. Copy code from [github](https://github.com/Darkshiira/webb22_alm_cicd) into your VS-code
2. Run command  ```npm install``` to install all dependencies
3. To start the server use command ```npm start```
4. Open your [browser](localhost:3000) and check us out!

### Grading requirments for VG

VG Requirements

You need to complete all the G requirements. The VG requirements state that you should be able to setup
the whole pipeline without help so you will not get clear instructions how to complete the tasks. You can still
ask questions, but the teacher will not help in detail for VG.
Optimize your project for the inner and outer loop. Think about the order and speed for all jobs, developers
don't like to wait, they want to work in a efficient way.
You have to complete 8 out of 10 requirements, so you can skip two of them if you manage to complete the
rest.

- [X] Make sure you use a small image in your build, i.e alpine
- [ ] Add a additional eslint plugin, i.e prettier or a node plugin. https://www.npmjs.com/search?
q=keywords%3Aeslintplugin&ranking=popularity
- [X] Configure test reports for your pipeline, example action: https://github.com/marketplace/actions/testreporter
- [X] Add nyc coverage to your package.json as devDependency and as scripts nyc
-[ ] When running unit tests in your pipeline, make sure to calculate coverage and fail the pipeline if it is
bellow a certain threshold
-[ ] Modify the job for supertest or add selenium, running a test against a running container started in
background https://docs.github.com/en/actions/using-containerized-services/about-servicecontainers
- [ ] Make sure NODE_ENV='production' is set when fake deploying to production, read more:
https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
- [ ] Make sure NODE_ENV='development' is set when fake deploying to test
- [ ] The pipeline in your Fake Production Deploy that it prints:

1.The docker image supposed to run

2.stored as a secret https://docs.github.com/en/actions/security-guides/encrypted-secrets
- [X] Validate commit messages with commitlint