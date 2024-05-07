# Note

## actor

- user:
  - student
  - tutor (extend student)
  - admin (extend student)
- course

## use case

### all role

- request study
- attend classes (owned or accepted classes)
- see class report (owned or accepted classes) (custom by role)
- message
- deposit
- withdraw
- checkout

### student

### tutor

### admin

## pages

| page                               | optional | param | isDone |
| ---------------------------------- | -------- | ----- | ------ |
| landing                            | x        |       |        |
| home                               |          |       |        |
| about                              |          |       |        |
| search                             |          | q     |        |
| recommend                          | x        |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| sign-in                            |          |       |        |
| sign-up                            |          |       |        |
| forgot-password                    |          |       |        |
| reset-password                     |          |       |        |
| confirm-email                      | x        |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| user/setting                       |          |       |        |
| user/setting#tutor                 |          |       |        |
| user/setting#profile               |          |       |        |
| user/deposit                       |          |       |        |
| user/withdraw                      | x        |       |        |
| user/balance                       |          |       |        |
| user/{id}/activity                 | x        |       |        |
| user/{id}/profile                  |          |       |        |
| user/{id}/history                  |          |       |        |
| user/{id}/request                  |          |       |        |
| user/{id}/request/learn            |          |       |        |
| user/{id}/request/teach            | x        |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| courses                            |          |       |        |
| course/create                      |          |       |        |
| course/{course_id}                 |          |       |        |
| course/{course_id}/edit            |          |       |        |
| course/{course_id}/register        |          |       |        |
| course/{course_id}/request         |          |       |        |
| course/{course_id}/participants    |          |       |        |
| course/{course_id}/report          |          |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| tutor/all                          |          |       |        |
| tutor/{id}/courses                 |          |       |        |
| tutor/{id}/subjects                |          |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| subject/all                        |          |       |        |
| subject/{subject_name}/courses     |          |       |        |
| subject/{subject_name}/tutors      |          |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| message                            |          |       |        |
| message/{message_id}               |          |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| 404-not-found                      |          |       |        |
| error                              |          |       |        |
| 500-internal-error                 | x        |       |        |
| maintenance                        | x        |       |        |
|                                    |          |       |        |
| ---------------------------------- |          |       |        |
| admin/dashboard                    |          |       |        |
| admin/dashboard/users              |          |       |        |
| admin/dashboard/blacklist          |          |       |        |
| admin/dashboard/subjects           |          |       |        |
| admin/dashboard/tutor-applications |          |       |        |
|                                    |          |       |        |
|                                    |          |       |        |

## API

1 course - n group => expire time: course end -> data đi đâu??
1 group - n member
1 member - n course
