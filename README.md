# JSON Weight

Quickly identify large branches in JSON API endpoints.

```
npm install -g json-weight
curl -s http://example.com/api/endpoint.json | json-weight
```

## Why?

When conducting performance audits, we found it difficult to determine
the shape of JSON API endpoints. Why was the output so large? What was
the source of the problem?

`json-weight` is a simple tool to assist in the troubleshooting of
large JSON endpoints.

For a more detailed walkthrough, checkout [the related blog post](https://www.viget.com/articles/keeping-json-endpoints-in-check-with-json-weight).

## Usage

```
output-command | json-weight <depth> (optional)
```

For example:

```
curl http://code.viget.com/json-weight/people.json | json-weight
curl http://code.viget.com/json-weight/people.json | json-weight 2
```

## Output

```
curl -s http://code.viget.com/json-weight/people.json | json-weight 2
0: 69.14kb (30.95kb gzip)
  friends: 67.31kb (30.03kb gzip)
1: 67.54kb (30.55kb gzip)
  friends: 66.09kb (29.85kb gzip)
2: 71.48kb (31.80kb gzip)
  friends: 69.80kb (30.95kb gzip)
3: 74.67kb (33.21kb gzip)
  friends: 72.92kb (32.50kb gzip)
4: 72.47kb (32.12kb gzip)
  friends: 71.03kb (31.61kb gzip)
5: 73.16kb (32.53kb gzip)
  friends: 71.06kb (31.78kb gzip)
```
