Add-Type -AssemblyName System.Drawing

$sourcePath = "C:\Users\Admin\.gemini\antigravity\scratch\knooviq-enterprise\public\knooviq-logo.png"
$transparentPath = "C:\Users\Admin\.gemini\antigravity\scratch\knooviq-enterprise\public\knooviq-logo-transparent.png"
$whiteTextPath = "C:\Users\Admin\.gemini\antigravity\scratch\knooviq-enterprise\public\knooviq-logo-darkmode.png"

$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)
$width = $bmp.Width
$height = $bmp.Height

# Create 32-bit ARGB bitmaps
$transparentBmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$darkModeBmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background removal threshold
# The background in the image is near-white / light grey (R > 230, G > 230, B > 230)
for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        $r = $pixel.R
        $g = $pixel.G
        $b = $pixel.B

        # Calculate luminance / closeness to white
        $minVal = [Math]::Min($r, [Math]::Min($g, $b))
        $maxVal = [Math]::Max($r, [Math]::Max($g, $b))
        $diff = $maxVal - $minVal

        # If pixel is near-white with low saturation
        if ($minVal -ge 242 -and $diff -le 15) {
            # Completely transparent
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
            $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        }
        elseif ($minVal -ge 215 -and $diff -le 20) {
            # Smooth antialiased alpha transition
            $alpha = [int]((242 - $minVal) / (242 - 215) * 255)
            if ($alpha -lt 0) { $alpha = 0 }
            if ($alpha -gt 255) { $alpha = 255 }

            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            
            # Dark mode version
            if ($r -lt 80 -and $g -lt 80 -and $b -lt 120) {
                # Dark navy text to bright white
                $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
            } else {
                $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            }
        }
        else {
            # Solid foreground pixel
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))

            # For dark mode: if the pixel belongs to the dark navy text "KNOOVIQ" or dark tagline
            # Dark navy text has low brightness (R < 50, G < 60, B < 110)
            if ($r -lt 60 -and $g -lt 65 -and $b -lt 110) {
                # Map to crisp white for dark mode
                $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
            }
            # For dark tagline text (R < 80, G < 80, B < 80)
            elseif ($r -lt 90 -and $g -lt 90 -and $b -lt 90 -and $diff -le 15) {
                # Map tagline to bright cyan/white
                $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 220, 240, 255))
            }
            else {
                # Retain vibrant cyan/blue emblem and "INDUSTRIES PVT LTD"
                $darkModeBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
            }
        }
    }
}

$bmp.Dispose()

$transparentBmp.Save($transparentPath, [System.Drawing.Imaging.ImageFormat]::Png)
$darkModeBmp.Save($whiteTextPath, [System.Drawing.Imaging.ImageFormat]::Png)

$transparentBmp.Dispose()
$darkModeBmp.Dispose()

Write-Output "Successfully generated transparent and dark-mode logos!"
