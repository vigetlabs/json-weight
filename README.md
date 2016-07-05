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

## Usage

```
output-command | json-weight <depth> (optional)
```

For example:

```
curl http://code.viget.com/json-weight/endpoint.json | json-weight
curl http://code.viget.com/json-weight/endpoint.json | json-weight 2
```

## Output

```
curl http://code.viget.com/json-weight/endpoint.json | json-weight 2

...

0: 67.72kb (31.31kb gzip)
  tags: 0.05kb (0.10kb gzip)
  friends: 66.89kb (30.21kb gzip)
1: 68.98kb (31.74kb gzip)
  tags: 0.06kb (0.09kb gzip)
  friends: 68.00kb (30.45kb gzip)
2: 69.52kb (32.02kb gzip)
  tags: 0.07kb (0.14kb gzip)
  friends: 68.62kb (30.74kb gzip)
3: 70.09kb (32.32kb gzip)
  tags: 0.06kb (0.10kb gzip)
  friends: 69.12kb (31.00kb gzip)
4: 71.86kb (32.43kb gzip)
  tags: 0.07kb (0.11kb gzip)
  friends: 70.75kb (31.52kb gzip)
```
