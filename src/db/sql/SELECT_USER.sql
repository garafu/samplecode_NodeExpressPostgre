SELECT
  t_user.id, t_user.name, t_auth.pass
FROM
  t_user
  LEFT OUTER JOIN
  t_auth
  ON
  t_user.id = t_auth.id
WHERE
  t_user.name = $1
;