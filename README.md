# JSON Weight

Quickly identify large branches in JSON API endpoints.

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
curl -s http://example.com/api/endpoint.json | json-weight
curl -s http://example.com/api/endpoint.json | json-weight 2
curl -s http://example.com/api/endpoint.json | json-weight 4
```

## Output

```
homepage: 23.90kb (11.38kb gzip)
  featured_collection: 12.54kb (6.56kb gzip)
  hero_item_1: 0.57kb (0.72kb gzip)
  hero_item_2: 3.17kb (1.86kb gzip)
  hero_item_3: 2.46kb (1.54kb gzip)
  hero_item_4: 0.40kb (0.52kb gzip)
  hero_item_1_image: 3.02kb (1.44kb gzip)
metadata: 4.66kb (2.02kb gzip)
  social_data: 4.58kb (1.94kb gzip)
```
