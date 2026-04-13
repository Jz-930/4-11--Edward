$urls = @(
    'https://www.grandviewresearch.com/',
    'https://www.researchandmarkets.com/',
    'https://mobilityforesights.com/',
    'https://www.skyquestt.com/',
    'https://www.fortunebusinessinsights.com/',
    'https://www.statcan.gc.ca/',
    'https://www12.statcan.gc.ca/',
    'https://www.ontario.ca/',
    'https://www.torontohydro.com/',
    'https://trreb.ca/',
    'https://www.rentechdigital.com/',
    'https://www.sec.gov/',
    'https://chagee.com/',
    'https://investor.luckincoffee.com/',
    'https://www.rbi.com/',
    'https://retail-insider.com/',
    'https://prnewswire.com/',
    'https://dailyhive.com/',
    'https://newswire.ca/',
    'https://tipranks.com/',
    'https://cadillacfairview.com/',
    'https://36kr.com/',
    'https://uscanyin.com/',
    'https://ebrun.com/',
    'https://vffranchiseconsulting.com/',
    'https://wikipedia.org/',
    'https://yicai.com/',
    'https://news.cn/',
    'https://ubereats.com/',
    'https://nomsmagazine.com/',
    'https://vancouverisawesome.com/',
    'https://businesswire.com/',
    'https://thebambooworks.com/',
    'https://pandaily.com/',
    'https://cbsnews.com/',
    'https://gcrmag.com/',
    'https://globenewswire.com/',
    'https://patch.com/',
    'https://longbeachize.com/',
    'https://eastmoney.com/',
    'https://forbes.com/',
    'https://scmp.com/',
    'https://fastcasual.com/',
    'https://foodtalks.cn/',
    'https://bjnews.com.cn/',
    'https://iyiou.com/',
    'https://longbridge.com/',
    'https://chatimefranchise.com/',
    'https://entrepreneur.com/',
    'https://cfa.ca/'
)

foreach ($u in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
        Write-Host "OK: $u"
    } catch {
        Write-Host "FAIL: $u | $($_.Exception.Message)"
    }
}
